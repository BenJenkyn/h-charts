from flask import Flask, jsonify
from flask_cors import CORS
from finance import get_stock_history
from lib.helperFunctions import convert_keys_to_camel_case

app = Flask(__name__)
CORS(app)

@app.route("/stock/<ticker>", methods=["GET"])
def get_stock(ticker):
    print("ticker", ticker)
    data = get_stock_history(ticker)
    data = [convert_keys_to_camel_case(item) for item in data]
    return jsonify(data)

if __name__ == "__main__":
    app.run(port=8000, debug=True)