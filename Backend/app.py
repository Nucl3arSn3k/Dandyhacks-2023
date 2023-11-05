from flask import Flask,make_response,request,redirect, url_for, session
from pypdf import PdfReader
from io import BytesIO
import base64
import mimetypes
from authlib.integrations.flask_client import OAuth
from google.cloud import aiplatform

from databasehandler import commit_token_email
import random
import string
app = Flask(__name__)

app.secret_key = 'your_secret_key'  # Change this to a random secret key

oauth = OAuth(app)
google = oauth.register(
    name='google',
    client_id='924496584494-leum14jn35adqclljhpgnhnu9htd6pjc.apps.googleusercontent.com',
    client_secret='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',
    
    authorize_params=None,
    
    access_token_params=None,
    refresh_token_url=None,
    redirect_uri='http://127.0.0.1:5000/callback',
    server_metadata_url= 'https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'email profile'},
    
)
#client_kwargs={'scope': 'email profile'},
#access_token_url='https://accounts.google.com/o/oauth2/token',
#authorize_url='https://accounts.google.com/o/oauth2/auth',
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
    source = string.ascii_letters + string.digits
    result_str = ''.join((random.choice(source) for i in range(8)))
    session["google_authlib_nonce"] = result_str
    print(f"Nonce set in session: {session['google_authlib_nonce']}")
    return google.authorize_redirect(redirect_uri,nonce = session["google_authlib_nonce"])


@app.route('/callback')
def auth():
    token = google.authorize_access_token()
    nonce = session.get("google_authlib_nonce", "")
    user_info = google.parse_id_token(token,nonce=nonce)
    session['google_token'] = token
    access_token = token['access_token']
    expires_in = token['expires_in']
    scope = token['scope']
    token_type = token['token_type']
    id_token = token['id_token']
    expires_at = token['expires_at']
    email = user_info['email']
    #print(type(token))
    print(email)
    
    if commit_token_email(access_token,expires_in,scope,id_token,expires_at,email):
        return 'Logged in as: ' + email
    else:
        return 'Error logging in. Please try again later.'
        
    return 'TEMP'


@app.route('/logout')
def logout():
    session.pop('google_token', None)
    return redirect(url_for('index'))






if __name__ == "__main__":
    app.run(debug=True)