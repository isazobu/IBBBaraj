# Live

https://ibbbaraj.herokuapp.com



## Installation Python


Install the dependencies and devDependencies and start the server.

```sh
sudo apt-get update
sudo apt-get install python3.9
sudo apt install python3-pip
```

## Download Project
```
//Download Project
git clone https://github.com/isazobu/IBBBaraj.git
```
## Go to the project

```
cd BarajBackend
```

## Installation Libraries

```
pip install -r requirements.txt
```
## DB migrate operations and load data
```
python manage.py loaddata DB.json
python manage.py makemigrations
python manage.py migrate
```

## Run local server

```
python manage.py runserver
```