from flask import Flask, request, json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def hello_world():
    return "/ page"

@app.route("/collectInfo", methods=["GET"])
def get_collect_info():
    return "GET_SUCCESS"

# To print out the data sent in a POST request in Flask,
# you can use the request object's json property,
# which contains the JSON data sent in the request
@app.route("/collectInfo", methods=["POST"])
def collect_info():
    print(request.headers.get('Content-Type'))
    print(request.data)
    try:
        data = json.loads(request.data)
    except json.JSONDecodeError:
        data = None
    print(data)
    return data