from django.shortcuts import redirect, render
from .forms import UserForm
from django.contrib.auth import authenticate,login
from .models import invoice
from django.template import loader
from django.http import HttpResponse
# Create your views here.

ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]  
TEENS = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]  
TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]  
def convert_to_words(num):  
    if num == 0:  
        return "zero"  
    elif num< 0:  
        return "minus " + convert_to_words(abs(num))  
    elif num< 10:  
        return ONES[num]  
    elif num< 20:  
        return TEENS[num - 10]  
    elif num< 100:  
        return TENS[num // 10] + (" " + convert_to_words(num % 10) if num % 10 != 0 else "")  
    elif num< 1000:  
        return ONES[num // 100] + " hundred" + (" and " + convert_to_words(num % 100) if num % 100 != 0 else "")  
    elif num< 1000000:  
        return convert_to_words(num // 1000) + " thousand" + (" " + convert_to_words(num % 1000) if num % 1000 != 0 else "")  
    elif num< 1000000000:  
        return convert_to_words(num // 1000000) + " million" + (" " + convert_to_words(num % 1000000) if num % 1000000 != 0 else "")  
    else:  
        return "number out of range" 

# dont change the code above it is convert number into word



def index(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            # Handle sign-in logic here
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')  # Redirect to the dashboard or any other page
    else:
        form = UserForm()

    return render(request, 'index.html', {'form': form})

def home(request):
    return render(request ,'home.html')

def forms(request):
    return render(request ,'form.html')


def bill(request):
    name=request.POST['name']
    p_gst=request.POST['p_gst']
    date=request.POST['date']

    product1=request.POST['product1']
    qty1=request.POST['qty1']
    rate1=request.POST['rate1']
    amt1=request.POST['amount_1']

    product2=request.POST['product2']
    qty2=request.POST['qty2']
    rate2=request.POST['rate2']
    amt2=request.POST['amount_2']

    product3=request.POST['product3']
    qty3=request.POST['qty3']
    rate3=request.POST['rate3']
    amt3=request.POST['amount_3']

    product4=request.POST['product4']
    qty4=request.POST['qty4']
    rate4=request.POST['rate4']
    amt4=request.POST['amount_4']

    product5=request.POST['product5']
    qty5=request.POST['qty5']
    rate5=request.POST['rate5']
    amt5=request.POST['amount_5']

    product6=request.POST['product6']
    qty6=request.POST['qty6']
    rate6=request.POST['rate6']
    amt6=request.POST['amount_6']

    product7=request.POST['product7']
    qty7=request.POST['qty7']
    rate7=request.POST['rate7']
    amt7=request.POST['amount_7']

    product8=request.POST['product8']
    qty8=request.POST['qty8']
    rate8=request.POST['rate8']
    amt8=request.POST['amount_8']

    product9=request.POST['product9']
    qty9=request.POST['qty9']
    rate9=request.POST['rate9']
    amt9=request.POST['amount_9']

    product10=request.POST['product10']
    qty10=request.POST['qty10']
    rate10=request.POST['rate10']
    amt10=request.POST['amount_10']

    totalsub=request.POST['totalsub']
    cgst=request.POST['cgst']
    sgst=request.POST['sgst']
    roundgst=request.POST['roundgst']
    grandtotal=request.POST['grandtotal']
    
    word=int(grandtotal)
    rupees= convert_to_words(word)
    numword=str(rupees).capitalize()
   

    invoice_mysql=invoice(name=name,party_GST=p_gst,date=date,
                          product_1=product1,rate_1=rate1,quantity_1=qty1,amount_1=amt1,
                          product_2=product2,rate_2=rate2,quantity_2=qty2,amount_2=amt2,
                          product_3=product3,rate_3=rate3,quantity_3=qty3,amount_3=amt3,
                          product_4=product4,rate_4=rate4,quantity_4=qty4,amount_4=amt4,
                          product_5=product5,rate_5=rate5,quantity_5=qty5,amount_5=amt5,
                          product_6=product6,rate_6=rate6,quantity_6=qty6,amount_6=amt6,
                          product_7=product7,rate_7=rate7,quantity_7=qty7,amount_7=amt7,
                          product_8=product8,rate_8=rate8,quantity_8=qty8,amount_8=amt8,
                          product_9=product9,rate_9=rate9,quantity_9=qty9,amount_9=amt9,
                          product_10=product10,rate_10=rate10,quantity_10=qty10,amount_10=amt10,
                          total_amount=totalsub,CGST=cgst,SGST=sgst,Round_gst=roundgst,Grand_Total=grandtotal,numword=numword,)
    



    data={'name':name,'p_gst':p_gst,'date':date,
          "product1":product1,"qty1":qty1,"rate1":rate1,"amt1":amt1,
          "product2":product2,"qty2":qty2,"rate2":rate2,"amt2":amt2,
          "product3":product3,"qty3":qty3,"rate3":rate3,"amt3":amt3,
          "product4":product4,"qty4":qty4,"rate4":rate4,"amt4":amt4,
          "product5":product5,"qty5":qty5,"rate5":rate5,"amt5":amt5,
          "product6":product6,"qty6":qty6,"rate6":rate6,"amt6":amt6,
          "product7":product7,"qty7":qty7,"rate7":rate7,"amt7":amt7,
          "product8":product8,"qty8":qty8,"rate8":rate8,"amt8":amt8,
          "product9":product9,"qty9":qty9,"rate9":rate9,"amt9":amt9,
          "product10":product10,"qty10":qty10,"rate10":rate10,"amt10":amt10,"numword":numword,
          "totalsub":totalsub,"cgst":cgst,"sgst":sgst,"roundgst":roundgst,"grandtotal":grandtotal,}
         

    invoice_mysql.save()
    return render(request ,'bill.html',data)

def history(request):
    history=invoice.objects.all().values().order_by("-id")
    data={'history':history}
    return render(request ,'history.html',data)

def viewhistory(request,id):
    history=invoice.objects.get(id=id)
    data={'history':history}
    template=loader.get_template('viewhistory.html')
    return HttpResponse(template.render(data,request))