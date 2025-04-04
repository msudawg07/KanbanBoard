from django.shortcuts import render

# Create your views here.
def mainKanbanPage(request):
  return render(request, 'kanban.html')