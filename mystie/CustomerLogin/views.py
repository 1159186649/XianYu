from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from rest_framework import viewsets

from ..Register.models import Userinfo
# from .serializer import ProductSerializer


class Login(viewsets.ModelViewSet):
    queryset = Userinfo.objects.all()
    # serializer_class = ProductSerializer
