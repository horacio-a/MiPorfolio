FROM django:onbuild

WORKDIR /app

COPY requirements*.txt ./

RUN pip install

COPY . . 

EXPOSE 8000

CMD python manage.py runserver