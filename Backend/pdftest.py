from pypdf import PdfReader


def main():
    reader = PdfReader(r"D:\User\Documents\GitHub\CDCS\Dandyhacks-2023\Backend\bequiet.pdf") #needs a full length filepath,not a local one,don't know why
    page_total = len(reader.pages)
    for x in range(page_total):
        page = reader.pages[x]
        text = page.extract_text()
        print(text)





if __name__ == "__main__": 
    main()