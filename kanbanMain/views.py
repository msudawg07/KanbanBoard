from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def mainKanbanPage(request):
  return render(request, 'kanban.html')

def addNewTask(request):
  print(request.POST['test'])
  return render(request, "kanban.html")