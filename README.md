sudo apt-get update
sudo apt-get install python3.8
sudo apt install python3-pip

//Download Project
git clone https://github.com/isazobu/IBBBaraj.git


pip install -r requirements.txt

DB Migrate Operations
python manage.py makemigrations
python manage.py migrate

Runserver 
python manage.py runserver
