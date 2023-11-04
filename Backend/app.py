from flask import Flask,make_response,request,redirect, url_for, session
from pypdf import PdfReader
from io import BytesIO
import base64
import mimetypes
from authlib.integrations.flask_client import OAuth
app = Flask(__name__)

app.secret_key = 'your_secret_key'  # Change this to a random secret key

oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id='924496584494-leum14jn35adqclljhpgnhnu9htd6pjc.apps.googleusercontent.com',
    client_secret='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',
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    refresh_token_url=None,
    redirect_uri='*',
    client_kwargs={'scope': 'email profile'},
)


@app.route('/pdfload')
def pdf_loader():
    reader = PdfReader(r"D:\User\Documents\GitHub\CDCS\Dandyhacks-2023\Backend\bequiet.pdf") #needs a full length filepath,not a local one,don't know why
    page_total = len(reader.pages)
    combined_text = ""
    for x in range(page_total):
        page = reader.pages[x]
        text = page.extract_text()
        combined_text += text
    
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


@app.route('/login')
def login():
    redirect_uri = url_for('auth', _external=True)
    return google.authorize_redirect(redirect_uri)


@app.route('/callback')
def auth():
    token = google.authorize_access_token()
    user_info = google.parse_id_token(token)
    session['google_token'] = token
    return 'Logged in as: ' + user_info['email']


@app.route('/logout')
def logout():
    session.pop('google_token', None)
    return redirect(url_for('index'))




if __name__ == "__main__":
    app.run(debug=False)