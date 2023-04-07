from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy
# Create your views here.

def get_companies(request):
    companies = Company.objects.all()
    companies_json = [comp.to_json() for comp in companies]
    return JsonResponse(companies_json, safe=False, json_dumps_params={'indent': 2})

def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
        return JsonResponse(company.to_json(), status=200, json_dumps_params={'indent': 2})
    except Company.DoesNotExist as error:
        return JsonResponse({'error': str(error)}, status=400, json_dumps_params={'indent': 2})

def get_company_vacancies(request, id):
    try:
        company_name = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company_name)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})
    except Company.DoesNotExist as error:
        return JsonResponse({'error': str(error)}, status = 400, json_dumps_params={'indent': 2})

def get_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})

def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
        return JsonResponse(vacancy.to_json(), status=200, json_dumps_params={'indent': 2})
    except Vacancy.DoesNotExist as error:
        return JsonResponse({'error': str(error)}, status=400, json_dumps_params={'indent': 2})

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    return JsonResponse([vacancy.to_json() for vacancy in vacancies], safe=False, json_dumps_params={'indent': 2})