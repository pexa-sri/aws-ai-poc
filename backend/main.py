from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def hello_world():
    return "Hello, World!"

@app.route("/collectInfo", methods=["GET"])
def get_collect_info():
    return "GET_SUCCESS"

@app.route("/collectInfo", methods=["POST"])
def collect_info():
    return "POST_SUCCESS"