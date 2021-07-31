from django.contrib import admin
from mptt.admin import MPTTModelAdmin

from .models import (
    Category,
    Product,
    ProductImage,
    ProductSpecification,
    ProductSpecificationValue,
    ProductType,
)

admin.site.register(Category, MPTTModelAdmin)
admin.site.register(Product)
admin.site.register(ProductImage)
admin.site.register(ProductSpecification)
admin.site.register(ProductSpecificationValue)
admin.site.register(ProductType)
