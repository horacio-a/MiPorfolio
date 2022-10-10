from django.urls import include
from django.contrib import admin
from django.urls import path
from .views import  inicio, estilos
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import handler404
from porfolio.views import Error404View
 


urlpatterns = [
    
    path('', inicio, name='home' ),
    path('admin/', admin.site.urls),
    path('eyes/', include('eyes.urls')),
    path('space/', include('space.urls')),
    path('estilos/', estilos, name='estilos')
] + static (settings.STATIC_URL, document_root = settings.STATIC_ROOT )

handler404 = Error404View.as_view()

