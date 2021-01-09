from django.urls import path, include
from CustomerLogin import views
from rest_framework.routers import DefaultRouter
from rest_framework import routers

router = routers.SimpleRouter()
router.register('', views.Login)
urlpatterns = [
    path('', include(router.urls)),
]
