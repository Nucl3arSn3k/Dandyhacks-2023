from flask import Flask,make_response,request,redirect, url_for, session
from pypdf import PdfReader
from io import BytesIO
import base64
import mimetypes
from authlib.integrations.flask_client import OAuth
from google.cloud import aiplatform

import ai_connection
import random
import string
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
pdfx = ""

app.secret_key = 'your_secret_key'  # Change this to a random secret key

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/ai")
def ai():
    return ai_connection.ouroboros(0.2,"confident-slice-404114","us-central1",pdfx)

@app.route('/pdfload')
def pdf_loader():
    reader = PdfReader(r"D:\User\Documents\GitHub\CDCS\Dandyhacks-2023\Backend\bequiet.pdf") #needs a full length filepath,not a local one,don't know why
    page_total = len(reader.pages)
    combined_text = ""
    for x in range(page_total):
        page = reader.pages[x]
        text = page.extract_text()
        combined_text += text
    global pdfx

    pdfx = combined_text
    
    response = make_response(combined_text)
    response.headers["Content-Disposition"] = "attachment; filename=extracted_text.txt"
    response.headers["Content-Type"] = "text/plain"
    return response

@app.route('/convert',methods=['POST'])
def convert():
    if request.headers['Content-Type'] == 'application/pdf':
        print("correct type")
        #print(request.data)
        base64_string = request.data.decode('utf-8')
        #print(base64_string)  # Decode the Base64 string
        pdf_data = base64.b64decode(base64_string)
        #print(pdf_data)
        with open('Backend\\decoded_pdf.pdf', 'wb') as file:
            print("dumping to file")
            file.write(pdf_data)  # Decode Base64 to binary
        reader = PdfReader('Backend\\decoded_pdf.pdf') #needs a full length filepath,not a local one,don't know why
        page_total = len(reader.pages)
        combined_text = ""
        for x in range(page_total):
            page = reader.pages[x]
            text = page.extract_text()
            combined_text += text
        print(combined_text)
        response = make_response(combined_text)
        response.headers["Content-Disposition"] = "attachment; filename=extracted_text.txt"
        response.headers["Content-Type"] = "text/plain"
        return response
    else:
        return 'Unsupported upload',415

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False)
