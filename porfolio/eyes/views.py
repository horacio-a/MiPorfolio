from importlib.metadata import requires
from django.shortcuts import render, redirect
from django.conf import settings
from django.core.mail import send_mail

# Create your views here.
def inicio(request):
    return render(request, 'eyes/inicio.html');

def  quiensoy(request):
    return render(request, 'eyes/quiensoy.html');

def  proyectos(request):
    return render(request, 'eyes/proyectos.html');



def  habilidades(request):
    return render(request, 'eyes/habilidades.html');


def  contacto(request):
    if request.method == 'GET':
        return render(request, 'eyes/contacto.html')

    if request.method == 'POST':

        subject = request.POST['subject']

        message = request.POST['name']+ " Te envio este mensaje  / " + request.POST['message'] + " /  para Responder escribi aca " + request.POST['email']

        email_from = settings.EMAIL_HOST_USER

        recipient_list = ['horaciomatiaslbornoz@gmail.com']
        

        send_mail( subject,message,email_from, recipient_list  )

        context = { message: 'Mensaje Enviado'}

        return render(request, 'eyes/contacto.html', context = context)


