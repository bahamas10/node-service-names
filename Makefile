all:
	node get-list.js > service-names.js
clean:
	rm -f service-names.js

.PHONY: all clean
