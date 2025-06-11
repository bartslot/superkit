from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from degiroapi import DeGiro
import os

app = FastAPI()

class LoginData(BaseModel):
    username: str
    password: str

@app.post("/login-and-fetch")
def login_and_fetch(data: LoginData):
    degiro = DeGiro()
    try:
        degiro.login(data.username, data.password)
        portfolio = degiro.getdata()
        products = degiro.product_info([p['id'] for p in portfolio['portfolio']['products'].values()])
        return {
            "positions": portfolio['portfolio']['products'],
            "products": products
        }
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))