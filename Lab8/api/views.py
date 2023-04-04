from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Product, Category

# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, id):
    for product in Product.objects.all():
        if product['id'] == id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, id):
    for category in Category.objects.all():
        if category['id'] == id:
            return JsonResponse(category)
        
    return JsonResponse({'error': 'Category not found'})

def category_products(request, id):
    cat_products = [p.to_json() for p in Product.objects.filter(category_id = id)]
    return JsonResponse(cat_products, safe=False)