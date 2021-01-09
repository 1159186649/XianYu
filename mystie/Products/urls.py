from django.urls import path, include
from Products import views
from rest_framework.routers import DefaultRouter
from rest_framework import routers

router = routers.SimpleRouter()
router.register('', views.Products)
urlpatterns = [
    path('', include(router.urls)),
]
