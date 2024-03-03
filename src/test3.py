import re


def convert_xml_characters(input_file, output_file):
    with open(input_file, "r") as file:
        content = file.read()

    # Define a dictionary of non-permitted XML characters and their corresponding permitted characters
    xml_characters = {"<": "&lt;", ">": "&gt;"}

    # Use regular expressions to find and replace non-permitted XML characters
    pattern = re.compile("|".join(xml_characters.keys()))
    modified_content = pattern.sub(
        lambda match: xml_characters[match.group(0)], content
    )

    with open(output_file, "w") as file:
        file.write(modified_content)


# Usage example
input_file = "input.csv"
output_file = "output.csv"
convert_xml_characters(input_file, output_file)
