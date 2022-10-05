
from random import randint
from django.shortcuts import render,redirect
from django.http import HttpResponse


def inicio(request):
    pagina = randint(1 , 3)
    if pagina == 1 :
        return redirect('/eyes', request );
    elif pagina == 2:
        return redirect('/moder', request);
    elif pagina == 3:
        return redirect('/space', request);


def estilos(request):
    return render(request, 'configestilos.html')