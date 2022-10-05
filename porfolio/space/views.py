from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail


def inicioSpace(request):
    return render(request, 'space/inicio.html')

def  quiensoySpace(request):
    return render(request, 'space/quiensoy.html');

def  proyectosSpace(request):
    return render(request, 'space/proyecto.html');

def  habilidadesSpace(request):
    return render(request, 'space/habilidades.html');

def  contactoSpace(request):
    if request.method == 'GET':
        return render(request, 'space/contacto.html')

    if request.method == 'POST':
        subject = request.POST['subject']
        message = request.POST['name']+ " Te envio este mensaje  / " + request.POST['message'] + " /  para Responder escribi aca " + request.POST['email']
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['horaciomatiaslbornoz@gmail.com']
        if subject != '' and message != '':
            send_mail( subject,message,email_from, recipient_list)
            context = { message: 'Mensaje Enviado'}
        else:
            context = { message: 'No completaste un campo'}

        
        return render(request, 'space/contacto.html', context = context)

