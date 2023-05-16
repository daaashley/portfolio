from datetime import timedelta

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from backend.db import dal
from backend.services.auth import (
    Token,
    User,
    authenticate_user,
    create_access_token,
    get_current_user,
)
from backend.validator import RegisterForm, UserResponse

ACCESS_TOKEN_EXPIRES_MINUTES = 30

router = APIRouter()


@router.post("/register", response_model=UserResponse)
async def register_user(form_data: RegisterForm):
    user = dal.create_user(form_data.username, form_data.password)
    return {"user": user}


@router.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    print("form data2: ", form_data)
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRES_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires,
    )
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/users/me", response_model=User)
async def read_users_me(token: str):
    current_user = get_current_user(token)
    return current_user
