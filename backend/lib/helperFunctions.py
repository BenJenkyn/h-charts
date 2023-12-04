def convert_keys_to_camel_case(dictionary):
    camel_case_dict = {}
    for key, value in dictionary.items():
        words = key.replace(" ", "_").split("_")
        camel_case_key = words[0].lower() + "".join(
            word.capitalize() for word in words[1:]
        )
        camel_case_dict[camel_case_key] = value
    return camel_case_dict
