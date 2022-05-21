## Important Information

This guide has been made from personal projects. The versions used have been chosen and tested against each other to avoid future compatibility failures.

This project has been created to test code for the company "Connecting Visions".

## Backend Installation

Install the package manager [pip](https://pypi.org/project/pip/22.0.4/) to install the project packages.

```bash
pip install pip==22.0.4
```
Or update the package manager to the latest version.
```bash
python -m pip install --upgrade pip
```

## Virtual Enviroment

Lets create a virtual enviroment to install all the packages with this command.
```bash
python -m venv venv
```

Now we are going to activate the virtual environment with the following command
+ (Windows)
```bash
venv\Scripts\activate
```
+ (Linux)
```bash
source venv/bin/activate
```

Now we are going to install the necessary dependencies for the project with the following command
```bash
pip install -r requirements.txt
```
## Visual Studio Extensions

I recommend installing the following visual studio extensions:
+ Python
+ Pylance
+ Material Icon Theme
+ Docker
+ Better Comments

## Start a Django Project

To start a new Django project, in this case inside the "backend" folder, we will write the following command
```bash
django-admin startproject core .
```

## Usage

To start the project you need to have the **.env** file, so we must create it with its variables and make sure that it is called correctly in the **settings.py** file.

I will mail the ".env" file to the company so they can run everything properly.

It is done this way since it is a good security practice.

```python
import os

env = environ.Env()
environ.Env.read_env()
ENVIROMENT = env

SECRET_KEY = os.environ.get('SECRET_KEY')
DEBUG = os.environ.get('DEBUG')
```

To start the project locally we must execute the following command

```bash
python manage.py runserver
```

To create a new application within the django project, use the following command.

```bash
python manage.py startapp app_name
```

If we create a new application, we must declare it in the settings.py document in the 'INSTALLED_APPS' section.

```python
INSTALLED_APPS = [
    ...
    'core',
    'app_name',
]
```

To update the database with the new applications created, we must execute the following commands.

```bash
python manage.py makemigrations app_name
```

```bash
python manage.py migrate app_name
```

By migrating each application separately, we make sure there are no errors.

To configure Django's REST FRAMEWORK, you need to add this piece of code to the 'settings.py' file

```python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ]
}
```