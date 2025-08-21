import tkinter as tk
import random

# Possible animals
animals = ["Horse", "Camel", "Sheep", "Goat"]

# Evaluation logic
def evaluate_toss(toss):
    horse_count = toss.count("Horse")
    unique_animals = len(set(toss))

    if unique_animals == 4:
        return "🏆 You got all 4 different animals! Best outcome!"
    elif horse_count == 4:
        return "🐴🐴🐴🐴 Wow! 4 Horses! Perfect toss!"
    elif horse_count == 3:
        return "🐴🐴🐴 Great! 3 Horses!"
    elif horse_count == 2:
        return "🐴🐴 Not bad. 2 Horses."
    elif horse_count == 1:
        return "🐴 Only 1 Horse. Try again!"
    else:
        return "❌ No Horses. Bad luck!"

# Toss function
def toss_shagai():
    toss = [random.choice(animals) for _ in range(4)]
    result_text = "\n".join([f"Shagai {i+1}: {animal}" for i, animal in enumerate(toss)])
    evaluation = evaluate_toss(toss)

    result_label.config(text=result_text)
    eval_label.config(text=evaluation)

# Main GUI setup
window = tk.Tk()
window.title("Shagai Tossing Game")
window.geometry("400x300")
window.configure(bg="#f0f0f0")

title_label = tk.Label(window, text="🎲 Toss 4 Shagai", font=("Helvetica", 18, "bold"), bg="#f0f0f0")
title_label.pack(pady=10)

toss_button = tk.Button(window, text="Toss Shagai", command=toss_shagai, font=("Helvetica", 14), bg="#4caf50", fg="white", padx=20, pady=10)
toss_button.pack(pady=10)

result_label = tk.Label(window, text="", font=("Helvetica", 12), bg="#f0f0f0", justify="left")
result_label.pack(pady=10)

eval_label = tk.Label(window, text="", font=("Helvetica", 12, "italic"), fg="blue", bg="#f0f0f0")
eval_label.pack(pady=10)

# Start the GUI
window.mainloop()
