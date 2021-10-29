from django.urls import path
from .views import ContactList,ContactDetaiView

urlpatterns = [
    path('',ContactList.as_view()),
    path('<int:id>',ContactDetaiView.as_view()),
]
