import graphene
from graphene_django import DjangoObjectType

from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ["id", "title", "description"]


class Query(graphene.ObjectType):

    all_products = graphene.List(Product)

    def resolve_all_products(root, info):
        return Product.objects.all()


schema = graphene.Schema(query=Query)
