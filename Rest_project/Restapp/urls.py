from django.urls import path

from Restapp import views

urlpatterns = [
    path('details/',views.details,name='details'),
    path('getdata/',views.getdata,name='getdata'),
    path('delete_data/<int:id>/',views.delete_data,name='delete_data')
]