#code by @Tan
import colorama
from colorama import Fore, Back, Style
colorama.init(autoreset=True)
import os
os.system("clear")
print(f"{Fore.GREEN}\nCREATOR BY @TAN\n===================================")
quest =  input(f"{Fore.YELLOW}PILIH BEBERAPA FITUR INI\n{Fore.CYAN}a = run,install all paket,\n{Fore.BLUE}u = run install paket dan unzip module\n{Fore.RED}r = run you script:\n{Fore.GREEN}==================================\ninput keyword :  ")

if quest == "a" or quest == "A":
  os.system("pkg update")
  os.system("pkg upgrade")
  os.system("pkg install nodejs")
  os.system("pkg install git")
  os.system("pkg install ffmpeg")
  os.system("pkg install yarn")
  os.system("pkg install libwebp")
  os.system("yarn install")
  os.system("clear")
  print("Done wait run your bot...")
  os.system("npm start")
elif quest == "u" or quest == "U":
  os.system("pkg update")
  os.system("pkg upgrade")
  os.system("pkg install nodejs")
  os.system("pkg install yarn")
  os.system("pkg install git")
  os.system("pkg install ffmpeg")
  os.system("pkg install libwebp")
  os.system("unzip node_modules")
  os.system("clear")
  print("Done wait for run your bot")
  os.system("npm start")
elif  quest == "r" or quest == "R":
  os.system("clear")
  os.system("npm start")
else:
  print("Your input invalid check your input!!!")