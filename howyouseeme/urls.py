from django.conf.urls import patterns, include, url
from aptitude import views

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'aptitude.views.home', name='home'),
    
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^(?P<username>\w+)/$', 'aptitude.views.profile', name='profile'),
)
