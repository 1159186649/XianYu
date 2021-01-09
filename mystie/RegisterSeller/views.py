from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from rest_framework import viewsets

from RegisterSeller.models import Sellerinfo
from RegisterSeller.serializer import SellerSerializer


class RegisterSeller(viewsets.ModelViewSet):
    queryset = Sellerinfo.objects.all()
    serializer_class = SellerSerializer


class LoginSeller(viewsets.ModelViewSet):
    queryset = Sellerinfo.objects.all()
    serializer_class = SellerSerializer
