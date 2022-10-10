from django.views.defaults import page_not_found

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

 
def mi_error_404(request , exception):
    nombre_template = '404.html'
 
    return page_not_found(request, template_name=nombre_template)