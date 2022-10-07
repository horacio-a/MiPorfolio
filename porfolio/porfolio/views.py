
from random import randint
from django.shortcuts import render,redirect
from django.http import HttpResponse


def inicio(request):
    pagina = randint(1 , 2)
    if pagina == 1 :
        return redirect('/eyes', request );

    elif pagina == 2:
        return redirect('/space', request);


def estilos(request):
    return render(request, 'configestilos.html')


def handler404(request, exception):
    return render(request, '404.html')