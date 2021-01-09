from django.urls import path, include

from rest_framework.routers import DefaultRouter
from rest_framework import routers
from Register import views
router = routers.SimpleRouter()

router.register('Register', views.Register)
router.register('Login/Customer', views.LoginCustomer)

urlpatterns = [
    path('', include(router.urls)),
]
