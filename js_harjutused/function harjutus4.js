function abbreviateName(name) {
  if (name.length > 5) {
    // If the name is longer than 5 characters, truncate it and add "..."
    const abbreviatedName = name.substring(0, 5) + "...";
    console.log(`Abbreviated Name: ${abbreviatedName}`);
  } else {
    // If the name is 5 characters or shorter, keep it unchanged
    console.log(`Abbreviated Name: ${name}`);
  }
}

// Example usage:
abbreviateName("Jonathan"); // This will print "Abbreviated Name: Jona..."
abbreviateName("Alice");    // This will print "Abbreviated Name: Alice"
