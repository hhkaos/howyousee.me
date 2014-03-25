from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from aptitude.models import Aptitude

# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def profile(request,username):
	aptitudes = Aptitude.objects.all()
	
	template = loader.get_template('profile.html')
	context = RequestContext(request, {
		'username': username,
		'aptitudes': aptitudes
	})
	return HttpResponse(template.render(context))