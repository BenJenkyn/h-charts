import yfinance as yf
import requests


def get_stock_history(ticker, period="15d"):
    """
    This function fetches the historical data for a given stock ticker over a specified period (default 15 days).
    """
    try:
        stock = yf.Ticker(ticker)
        history = stock.history(period=period)
        # print("history", history)
        return history.to_dict("records")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred while fetching the stock price: {e}")
        return None


print(get_stock_history("AAPL"))
