from django.shortcuts import render
# my imports
import time
from django.contrib.auth.decorators import login_required   # Login required to access private page
from django.views.decorators.cache import cache_control     # Destroys the section after logout

from django.views.decorators.cache import never_cache      # Prevents caching of the page
""" By using the never_cache decorator, 

you ensure that the response to the view is not cached by the browser. 
This forces the browser to revalidate the page with the server on every request, 
preventing it from using a cached version.

Please note that even with the cache-control headers set correctly, some browsers or caching proxies may still choose to cache the page. In such cases, you may need to explore additional techniques like adding cache-busting parameters to the URLs or using server-side cache control mechanisms to enforce no caching. """

from django.utils.decorators import method_decorator



# Front-end page
def home(request):
    return render(request, 'inbox_app/home.html')


 # Back-end page 
@login_required(login_url='login')

@cache_control(no_cache=True, must_revalidate=True, no_store=True) # Doen't work on Safari !!!!!!!
@never_cache
def inbox(request):
    return render(request, 'inbox_app/inbox.html')



# Problem: When you logout and click on the back button, you are still able to access the page.


    """ This behavior is caused by a feature in Webkit browsers unofficially called Page Cache,
        also known as the back/forward cache. It controls what happens to previous pages in the current browsing session.
            Webkit does something special in that it "suspends" previous pages.
                It's as if the previous page is hidden in another tab; clicking the back button is like bringing the tab into the foreground.
                        The page is still there just as it was. This means no network request is made and therefore your server logic is never touched. """