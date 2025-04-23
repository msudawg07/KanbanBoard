from django.urls import path
from . import views

urlpatterns = [
  path('', views.mainKanbanPage),
  path('home', views.mainKanbanPage),
  path('kanbanBoard', views.mainKanbanPage),
  path('addNewTask', views.addNewTask)
]
