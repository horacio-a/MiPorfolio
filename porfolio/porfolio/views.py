from pipes import Template
from django.views.defaults import page_not_found

from random import randint
from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.views.generic import(TemplateView)
from decouple import config


def inicio(request):


    pagina = randint(1 , 2)
    if pagina == 1 :
        return redirect('/eyes', request );


    elif pagina == 2:
        return redirect('/space', request);


def estilos(request):
    return render(request, 'configestilos.html')

 
class Error404View(TemplateView):
    template_name = "404.html"
