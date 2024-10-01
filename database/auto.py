import os
import colorama 
from colorama import Fore, Back, Style
colorama.init(autoreset=True)
def run():
  print(f"{Fore.GREEN}\n\tCREATOR BY @TAN\n|=======================================|")
  Tan = str(input(f"{Fore.GREEN}|{Fore.YELLOW}PILIH BEBERAPA FITUR INI \t\t{Fore.GREEN}|\n{Fore.GREEN}|{Fore.CYAN}a = run,install all paket\t\t{Fore.GREEN}|\n{Fore.GREEN}|{Fore.BLUE}u = run install paket dan unzip module\t{Fore.GREEN}|\n{Fore.GREEN}|{Fore.RED}r = run you script\t\t\t{Fore.GREEN}|\n{Fore.GREEN}|=======================================|\n\ninput keyword :  "))
  if Tan == "a" or Tan == "A":
    os.system("pkg update")
    os.system("pkg upgrade")
    os.system("pkg install git")
    os.system("pkg install nodejs")
    os.system("pkg install ffmpeg")
    os.system("pkg install libwebp")
    os.system("pkg install yarn")
    os.system("yarn install")
    os.system("clear")
    os.system("npm start")
  elif Tan == "u" or Tan == "U":
    os.system("pkg update")
    os.system("pkg upgrade")
    os.system("pkg install nodejs")
    os.system("pkg install yarn")
    os.system("pkg install git")
    os.system("pkg install ffmpeg")
    os.system("pkg install libwebp")
    os.system("unzip node_modules")
    os.system("clear")
    os.system("npm start")
  elif Tan == "r" or Tan == "R":
    os.system("clear")
    os.system("npm start")
  else:
    print("\n\n"+f"{Fore.RED}invalid input!!!"+"\n")
    run()
run()