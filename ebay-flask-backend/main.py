from flask import Flask, send_file
from flask import request, jsonify
from flask import make_response
from flask_cors import CORS

import json
import requests

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def index():
    return send_file('index.html')


@app.route('/input', methods=['GET', 'POST'])
def input():
    url = ""
    if (request.method == 'GET'):
        data = request.args
        keyWords = data.get('key-words')
