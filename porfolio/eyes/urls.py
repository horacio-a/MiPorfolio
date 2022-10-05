from django.urls import path
from eyes.views import inicio,quiensoy, proyectos, habilidades, contacto

urlpatterns = [
    path('', inicio, name='inicio'),
    path('quiensoy/', quiensoy, name='quiensoy'),
    path('proyectos/', proyectos, name='proyectos'),
    path('habilidades/', habilidades, name='habilidades'),
    path('contacto/', contacto, name='contacto'),
]

