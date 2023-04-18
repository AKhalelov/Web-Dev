from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.get_companies),
    path('companies/<int:id>', views.get_company),
    path('companies/<int:id>/vacancies', views.get_company_vacancies),
    path('vacancies', views.VacanciesAPIView.as_view()),
    path('vacancies/<int:id>', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten', views.top_ten_vacancies)
]