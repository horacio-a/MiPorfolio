
from django.urls import path
from space.views import inicioSpace, habilidadesSpace, proyectosSpace, quiensoySpace, contactoSpace

urlpatterns = [
    path('', inicioSpace, name='inicioSpace'),
    path('quiensoy/', quiensoySpace, name='quiensoySpace'),
    path('proyectos/', proyectosSpace, name='proyectosSpace'),
    path('habilidades/', habilidadesSpace, name='habilidadesSpace'),
    path('contacto/', contactoSpace, name='contactoSpace'),

]
