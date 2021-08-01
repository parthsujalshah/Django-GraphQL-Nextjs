from django.urls import path

from . import views

app_name = "store"

urlpatterns = [
    path("api/", views.ProductListView.as_view(), name="store-home"),
    path("api/<slug:slug>/", views.Product.as_view(), name="product"),
]
