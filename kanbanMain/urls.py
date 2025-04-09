from django.urls import path
from . import views

urlpatterns = [
  path('home', views.mainKanbanPage),
  path('addNewTask', views.addNewTask)
]
