from django.shortcuts import render
from django.http import HttpResponse
from django.template import RequestContext, loader
from aptitude.models import Aptitude
import json


# Create your views here.
def home(request):
    return HttpResponse("Hello, world. You're at the poll index.")

def profile(request,username):
	aptitudes = Aptitude.objects.all()
	
	template = loader.get_template('profile.html')
	context = RequestContext(request, {
		'username': username,
		'aptitudes': aptitudes,
	})
	return HttpResponse(template.render(context))

# def get_aptitude(request, username, page):
# 	if request.is_ajax():
        
#         user = User.objects.get(username=username)

#         # do whatever processing you need
#         # user.some_property = whatever

#         # send back whatever properties you have updated
#         json_response = {'user': {'some_property': user.some_property}}

#         return HttpResponse(json.dumps(json_response),
#             content_type='application/json')

#     return render(request, 'index.html', {'user': ''})