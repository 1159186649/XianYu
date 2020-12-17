from django.urls import path, include
from Register import views
from rest_framework.routers import DefaultRouter
from rest_framework import routers

router = routers.SimpleRouter()

router.register('Register', views.Register)

urlpatterns = [
    path('', include(router.urls)),
]
